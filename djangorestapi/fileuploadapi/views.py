
from rest_framework import  status
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.views import APIView

from fileuploadapi import serializer

from .models import *
from .serializer import *

class ProductFileShow(APIView):
        def get(self,request):
            data=ProductFile.objects.all()
            serializerFile=ProductFileSerializer(data,many=True)
            return Response(serializerFile.data)

        def post(self,request):
                serializerFile=ProductFileSerializer(data=request.data)
                
                if serializerFile.is_valid(raise_exception=True):
                        serializerFile.save()
                        custom_data = {
                                "status": True,
                                "message": 'Successfully uploaded your profile picture.',
                                "data": serializerFile.data
                                }
                        return Response(custom_data, status=status.HTTP_201_CREATED)
                else:
                        custom_data = {
                        "status": False,
                        "message": serializerFile.errors,
                        }
                        return Response(custom_data, status=status.HTTP_200_OK)
                

        

