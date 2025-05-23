variable "neon_api_key" {
  description = "Neon API key"
  type        = string
  sensitive   = true
}

variable "project_name" {
  description = "Name of the Neon project"
  type        = string
  default     = "ashgw-project"
}

variable "db_owner" {
  description = "Database owner name"
  type        = string
  default     = "ashgw"
}