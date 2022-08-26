import uuid
from django.db import models

# Create your models here.
class Product(models.Model):
    # models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    uniqueid=models.IntegerField(primary_key=True,auto_created=True)
    name=models.CharField(max_length=30)
    price=models.IntegerField()
    def __str__(self):
        return self.name


