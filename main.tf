provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_storage_bucket" "static_site" {
  name          = var.bucket_name
  location      = var.region
  force_destroy = true

  website {
    main_page_suffix = "index.html"
    not_found_page   = "index.html"
  }

  uniform_bucket_level_access = true
}

resource "google_storage_bucket_iam_member" "public_rule" {
  bucket = google_storage_bucket.static_site.name
  role   = "roles/storage.objectViewer"
  member = "allUsers"
}

# Upload all files from the build directory
resource "google_storage_bucket_object" "static_site_files" {
  for_each = fileset("${path.module}/react-app/dist", "**")

  bucket = google_storage_bucket.static_site.name
  name   = each.value
  source = "${path.module}/react-app/dist/${each.value}"
  
  # Determine content type based on extension
  content_type = lookup({
    "html" = "text/html"
    "css"  = "text/css"
    "js"   = "application/javascript"
    "png"  = "image/png"
    "jpg"  = "image/jpeg"
    "svg"  = "image/svg+xml"
    "json" = "application/json"
  }, split(".", each.value)[length(split(".", each.value)) - 1], "application/octet-stream")
}
