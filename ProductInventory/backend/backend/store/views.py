from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
# Create your views here.
from .serializers import ProductFileSerializer, ProductSerializer, ProductImageSerializer
from .models import Product, ProductFile, ProductImage


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all().order_by("-updated_at")


class ProductImageViewSet(ModelViewSet):
    serializer_class = ProductImageSerializer

    def get_queryset(self):
        return ProductImage.objects.filter(product_id=self.kwargs["product_pk"])

    def get_serializer_context(self):
        return {"product_id": self.kwargs["product_pk"], "request": self.request}


class ProductFileViewSet(ModelViewSet):
    serializer_class = ProductFileSerializer

    def get_queryset(self):
        return ProductFile.objects.filter(product_id=self.kwargs["product_pk"])

    def get_serializer_context(self):
        return {"product_id": self.kwargs["product_pk"], "request": self.request}
