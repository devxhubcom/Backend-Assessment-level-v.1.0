from django.db.models import Q
from django.shortcuts import render
from django.views.generic import ListView, View

from .models import Category, Product


class HomeView(View):
    def get(self, request):
        products = Product.objects.all()
        category = Category.objects.all()
        contex = {
            'product': products,
            'category': category
        }
        return render(request, 'product.html', contex)


class CategoryProduct(View):
    def get(self, request, pk):
        products = Product.objects.filter(category=pk)
        category = Category.objects.all()
        contex = {
            'product': products,
            'category': category
        }
        return render(request, 'categoryProduct.html', contex)


class SearchView(ListView):
    model = Product
    template_name = 'search.html'

    def get_queryset(self):
        query = self.request.GET.get('q')
        if query:
            object_list = self.model.objects.filter(
                Q(title__icontains=query) | Q(category__title__icontains=query)).distinct()
        else:
            object_list = self.model.objects.none()
        return object_list
