from rest_framework import serializers
from .models import *
class ProductFileSerializer(serializers.ModelSerializer):
    class Meta:
        model=ProductFile
        fields='__all__'


