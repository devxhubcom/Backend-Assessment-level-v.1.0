from django.urls import path
from . import views

# Shpo Routing

urlpatterns = [
    path('', views.index, name='index'),
]