from rest_framework import serializers

from .models import Category, Product, Order, FileUp


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'category_title']


class AllProductSerializer(serializers.ModelSerializer):
    category_title = serializers.SerializerMethodField(
        method_name='get_category_title')

    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'category', 'category_title', 'quantity', 'price', 'manufactured_date', 'expire_date',
                  'image']

    def get_category_title(self, product):
        return product.category.category_title


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'title', 'description', 'quantity',
                  'price', 'manufactured_date', 'expire_date', 'image']

    def create(self, validated_data):
        category_id = self.context['category_id']
        instance = Product.objects.create(
            category_id=category_id, **validated_data)
        return instance


class OrderSerializer(serializers.ModelSerializer):
    product_title = serializers.SerializerMethodField(
        method_name='get_product_title')

    unit_price = serializers.SerializerMethodField(
        method_name='get_unit_price')

    total_price = serializers.SerializerMethodField(
        method_name='get_total_price')

    class Meta:
        model = Order
        fields = ['customer_name', 'product', 'unit_price', 'product_title',
                  'quantity', 'order_date', 'total_price', 'status']

    def get_product_title(self, order):
        return order.product.title

    def get_unit_price(self, order):
        return order.product.price

    def get_total_price(self, order):
        return order.quantity * order.product.price


class FileSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUp
        fields = '__all__'
