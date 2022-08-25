from django.db import models

# Create your models here.
class ProductFile(models.Model):
    productFile=models.FileField(upload_to='productFile')


