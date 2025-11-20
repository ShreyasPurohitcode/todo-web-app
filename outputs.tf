output "website_url" {
  description = "URL of the website"
  value       = "https://storage.googleapis.com/${google_storage_bucket.static_site.name}/index.html"
}
