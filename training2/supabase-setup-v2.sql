-- ============================================================
--  新培训专用：建表 + 匿名读写策略（复制本文件内容到 Supabase SQL Editor → Run）
--  表名 submissions_v2 与 app-config.js 的 TABLE 保持一致
--  说明：复用同一个 Supabase 项目，仅新建一张独立表，
--        与原「台山送教」培训(submissions)数据完全隔离。
-- ============================================================

-- 1) 数据表
create table if not exists public.submissions_v2 (
  id uuid primary key,
  created_at timestamptz not null default now(),
  basic_info jsonb not null default '{}'::jsonb,
  questionnaire jsonb not null default '{}'::jsonb,
  tasks jsonb not null default '{}'::jsonb,
  files jsonb not null default '[]'::jsonb
);

-- 2) 存储桶（若已存在则跳过；多场培训可共用 uploads 桶，文件路径含 UUID 不会冲突）
insert into storage.buckets (id, name, public)
values ('uploads', 'uploads', false)
on conflict (id) do nothing;

-- 3) 表 RLS（允许匿名读写，供浏览器直连）
alter table public.submissions_v2 enable row level security;
drop policy if exists "anon_insert_v2" on public.submissions_v2;
create policy "anon_insert_v2" on public.submissions_v2 for insert to anon with check (true);
drop policy if exists "anon_select_v2" on public.submissions_v2;
create policy "anon_select_v2" on public.submissions_v2 for select to anon using (true);
drop policy if exists "anon_update_v2" on public.submissions_v2;
create policy "anon_update_v2" on public.submissions_v2 for update to anon using (true) with check (true);
drop policy if exists "anon_delete_v2" on public.submissions_v2;
create policy "anon_delete_v2" on public.submissions_v2 for delete to anon using (true);

-- 4) 存储桶 RLS（与 submissions 共用，已存在则跳过）
drop policy if exists "uploads_insert" on storage.objects;
create policy "uploads_insert" on storage.objects for insert to anon with check ( bucket_id = 'uploads' );
drop policy if exists "uploads_select" on storage.objects;
create policy "uploads_select" on storage.objects for select to anon using ( bucket_id = 'uploads' );
drop policy if exists "uploads_delete" on storage.objects;
create policy "uploads_delete" on storage.objects for delete to anon using ( bucket_id = 'uploads' );
