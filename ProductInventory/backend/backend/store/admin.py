from django.contrib import admin
from .models import Product, ProductImage, ProductFile

# Register your models here.


class ProductImageAdmin(admin.TabularInline):
    model = ProductImage
    min_num = 1
    extra = 0


class ProductFileAdmin(admin.TabularInline):
    model = ProductFile
    min_num = 1
    extra = 0


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    readonly_fields = ["created_at", "updated_at"]
    inlines = [ProductImageAdmin, ProductFileAdmin]
    list_display = ["title", "created_at", "updated_at"]
    fields = ["title", "description", "inventory", "unit_price", "image"]
    list_per_page = 10
