from django.urls import path
from django.urls.conf import include
from rest_framework_nested import routers

from . import views

router = routers.DefaultRouter()

router.register('allproducts', views.AllProductViewSet, basename='allproducts')
router.register("categories", views.CategoryViewSet, basename="categories")
router.register('orders', views.OrderViewSet, basename='order')
router.register('fileup', views.FileViewSet, basename='fileups')

category_router = routers.NestedSimpleRouter(router, "categories", lookup="category")
category_router.register("products", views.ProductViewSet, basename="all-product")

urlpatterns = [
    path("", include(router.urls)),
    path("", include(category_router.urls)),
]
