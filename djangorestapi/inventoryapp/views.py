from gc import get_objects
from logging import raiseExceptions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from . models import Product
from .serializer import ProductSerializer
from rest_framework import serializers
from django.shortcuts import get_object_or_404


# Create your views here.
@api_view(['GET']) 
def overview(request):
        rules={
                'File uploading api':'upload/',
                'all product show':'api/get/',
                'Add Product' :'api/create/',
                'Update Product':'api/update/pk/',
                'Delete Product':'api/delete/pk/',
                
        }
        return Response(rules)

@api_view(['GET']) 
def getProduct(request):
        if request.query_params:
                products=Product.objects.filter(**request.query_param.dict())
        else:
                products=Product.objects.all()
        if products:
                serializer=ProductSerializer(products,many=True)
                return Response(serializer.data)

@api_view(['POST']) 
def addProduct(request):
        productAdded=ProductSerializer(data=request.data)
        if Product.objects.filter(**request.data).exists():
                raise serializers.ValidationError('This product already exists')
        if productAdded.is_valid():
                productAdded.save()
                return Response(productAdded.data)
        else:
                return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['POST'])
def updateProduct(request,pk):
        productUpdate=Product.objects.get(pk=pk)
        serializer=ProductSerializer(instance=productUpdate,data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        else:
                return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(['DELETE'])
def deleteProduct(request,pk):
        productDelete=get_object_or_404(Product,pk=pk)
        productDelete.delete()
        return Response(status=status.HTTP_202_ACCEPTED)