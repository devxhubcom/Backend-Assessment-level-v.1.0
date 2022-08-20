from rest_framework.serializers import ModelSerializer
from .models import Product, ProductImage, ProductFile


class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["id", "image"]

    def create(self, validated_data):
        product_id = self.context["product_id"]
        image = validated_data["image"]
        instance = ProductImage.objects.create(
            product_id=product_id,
            image=image
        )
        return instance


class ProductFileSerializer(ModelSerializer):
    class Meta:
        model = ProductFile
        fields = ["id", "file"]

    def create(self, validated_data):
        product_id = self.context["product_id"]
        file = validated_data["file"]
        instance = ProductFile.objects.create(
            product_id=product_id,
            file=file
        )
        return instance


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "title", "description", "created_at",
                  "updated_at", "inventory", "unit_price", "image"]
