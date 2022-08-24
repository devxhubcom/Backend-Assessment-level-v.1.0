from django.urls import path

from .views import HomeView, SearchView, CategoryProduct

urlpatterns = [
    path('', HomeView.as_view(), name='homeview'),
    path('category/<pk>', CategoryProduct.as_view(), name='category'),
    path('search/', SearchView.as_view(), name='search')
]
