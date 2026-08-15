insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('lidya-media', 'lidya-media', true, 15728640, array['image/jpeg','image/png','image/webp','image/gif','image/avif','video/mp4','application/pdf'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public read lidya media" on storage.objects;
create policy "Public read lidya media" on storage.objects for select to public using (bucket_id = 'lidya-media');
