from django.core.validators import MinValueValidator
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(max_length=255)
    category = models.ManyToManyField(Category)
    price = models.PositiveIntegerField(validators=[MinValueValidator(1)])
    image = models.ImageField(upload_to='media/productShop')

    def __str__(self):
        return self.title
