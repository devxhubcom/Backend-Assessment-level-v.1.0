from rest_framework.mixins import CreateModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import Category, Product, Order, FileUp
from .pagination import DefaultPagination
from .serializers import CategorySerializer, ProductSerializer, OrderSerializer, AllProductSerializer, FileSerializer


class AllProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = AllProductSerializer
    pagination_class = DefaultPagination


class ProductViewSet(ModelViewSet):
    serializer_class = ProductSerializer
    pagination_class = DefaultPagination

    def get_queryset(self):
        return Product.objects.filter(category_id=self.kwargs["category_pk"])

    def get_serializer_context(self):
        return {"category_id": self.kwargs["category_pk"], "request": self.request}


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    pagination_class = DefaultPagination


class FileViewSet(CreateModelMixin, DestroyModelMixin, GenericViewSet):
    queryset = FileUp.objects.all()
    serializer_class = FileSerializer
    pagination_class = DefaultPagination
