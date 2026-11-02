-- ============================================================
--  数据回收网页端（静态版）所需的 Supabase 策略
--  用途：让浏览器用“匿名(anon)密钥”直连，实现提交/查看/删除。
--  在 Supabase 后台 → SQL Editor 中完整粘贴本文件 → Run 即可。
--  说明：匿名密钥本就公开，下列策略等于“任何拿到页面的人都能读写本表”。
--        对 10 人内部培训足够；若要更强安全，请改用“Node 服务端版”(见 README)。
-- ============================================================

-- 1) 数据表 RLS
alter table public.submissions enable row level security;

drop policy if exists "anon_insert" on public.submissions;
create policy "anon_insert" on public.submissions
  for insert to anon with check (true);

drop policy if exists "anon_select" on public.submissions;
create policy "anon_select" on public.submissions
  for select to anon using (true);

drop policy if exists "anon_update" on public.submissions;
create policy "anon_update" on public.submissions
  for update to anon using (true) with check (true);

drop policy if exists "anon_delete" on public.submissions;
create policy "anon_delete" on public.submissions
  for delete to anon using (true);

-- 2) 存储桶 uploads 的策略（上传/下载/删除文档）
drop policy if exists "uploads_insert" on storage.objects;
create policy "uploads_insert" on storage.objects
  for insert to anon with check ( bucket_id = 'uploads' );

drop policy if exists "uploads_select" on storage.objects;
create policy "uploads_select" on storage.objects
  for select to anon using ( bucket_id = 'uploads' );

drop policy if exists "uploads_delete" on storage.objects;
create policy "uploads_delete" on storage.objects
  for delete to anon using ( bucket_id = 'uploads' );
