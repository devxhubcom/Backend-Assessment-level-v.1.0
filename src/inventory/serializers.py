from rest_framework import serializers

from .models import Category, Product, Order, FileUp


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_title']


class AllProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'category', 'quantity', 'price', 'manufactured_date', 'expire_date',
                  'image']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'quantity', 'price', 'manufactured_date', 'expire_date', 'image']

    def create(self, validated_data):
        category_id = self.context["category_id"]
        instance = Product.objects.create(category_id=category_id, **validated_data)
        return instance


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['customer_name', 'product', 'quantity', 'order_date', 'status']


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUp
        fields = '__all__'
