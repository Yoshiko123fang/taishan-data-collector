-- 在 Supabase 控制台的 SQL Editor 中执行本文件（一次性）

-- 1) 数据表
create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  basic_info jsonb not null default '{}'::jsonb,
  questionnaire jsonb not null default '{}'::jsonb,
  tasks jsonb not null default '{}'::jsonb,
  files jsonb not null default '[]'::jsonb
);

-- 2) 存储桶（用于上传的 Word/PDF）
insert into storage.buckets (id, name, public)
values ('uploads', 'uploads', false)
on conflict (id) do nothing;

-- 说明：服务端使用 service_role key 读写，已绕过 RLS，因此无需额外策略。
--       若日后想收紧，可在此为 anon 增加受限策略。
