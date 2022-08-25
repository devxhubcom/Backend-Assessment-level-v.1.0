from django.contrib import admin
from . models import *
# Register your models here.
class ProductFileAdmin(admin.ModelAdmin):
     list_display= ['id','productFile']
admin.site.register(ProductFile,ProductFileAdmin)

