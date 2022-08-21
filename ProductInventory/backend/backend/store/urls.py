from django.urls import path, include
from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register("products", views.ProductViewSet, basename="products")

product_router = routers.NestedSimpleRouter(
    router, "products", lookup="product")

product_router.register(
    "images", views.ProductImageViewSet, basename="product-images")
product_router.register(
    "files", views.ProductFileViewSet, basename="product-files")

urlpatterns = [
    path("", include(router.urls)),
    path("", include(product_router.urls))
]
