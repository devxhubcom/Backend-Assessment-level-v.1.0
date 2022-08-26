from django.urls import path
from .  import views

urlpatterns = [
        path('',views.overview,name='home'),
        path('get/',views.getProduct,name='getProduct'),
        path('create/',views.addProduct,name='addProduct'),
        path('update/<int:pk>/',views.updateProduct,name='updateProduct'),
        path('delete/<int:pk>/',views.deleteProduct,name='deleteProduct')

]