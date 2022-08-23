from rest_framework.serializers import ModelSerializer
from .models import Category, Product, ProductImage, ProductFile


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "title",  "created_at", "updated_at"]


class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "image"]

    def create(self, validated_data):
        product_id = self.context["product_id"]
        images = self.context["images"]

        image_list = [ProductImage(
            product_id=product_id,
            image=image
        ) for image in images]

        instance = ProductImage.objects.bulk_create(image_list)

        return instance


class ProductFileSerializer(ModelSerializer):
    class Meta:
        model = ProductFile
        fields = ["id", "file"]

    def create(self, validated_data):
        product_id = self.context["product_id"]
        files = self.context["files"]

        file_list = [ProductFile(
            product_id=product_id,
            file=file
        ) for file in files]

        instance = ProductFile.objects.bulk_create(file_list)

        return instance


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "title", "description", "created_at",
                  "updated_at", "inventory", "unit_price", "image"]

    def create(self, validated_data):
        category_id = self.context["category_id"]
        title = validated_data["title"]
        inventory = validated_data["inventory"]
        unit_price = validated_data["unit_price"]
        image = validated_data["image"]

        instance = Product.objects.create(
            category_id=category_id,
            title=title,
            inventory=inventory,
            unit_price=unit_price,
            image=image,
        )
        return instance
