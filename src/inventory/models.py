from django.core.validators import MinValueValidator
from django.db import models


class Category(models.Model):
    category_title = models.CharField(max_length=255)

    def __str__(self):
        return self.category_title


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(
        max_digits=8,
        decimal_places=2,
        validators=[MinValueValidator(1)])
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='inventory')
    manufactured_date = models.DateField()
    expire_date = models.DateField()
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return self.title


class Order(models.Model):
    STATUS_CHOICE = (
        ('pending', 'Pending'),
        ('decline', 'Decline'),
        ('deliveried', 'Deliveried'),

    )
    customer_name = models.CharField(max_length=255)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='orderitems')
    quantity = models.PositiveSmallIntegerField()
    order_date = models.DateField(auto_now_add=True)
    status = models.CharField(
        max_length=10, choices=STATUS_CHOICE, default='pending')

    def __str__(self):
        return self.customer_name

    def save(self, *args, **kwargs):
        if not self.id:
            if self.quantity < self.product.quantity:
                self.product.quantity -= self.quantity
                self.product.save()
                super(Order, self).save(*args, **kwargs)


class FileUp(models.Model):
    file = models.FileField(upload_to='inventory/file')
# class Report(models.Model):

#     order = models.ForeignKey(Order,on_delete=models.PROTECT)
#     total_profit = models.DecimalField(max_digits=8,decimal_places=2)
