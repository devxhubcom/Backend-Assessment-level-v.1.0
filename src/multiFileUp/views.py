from django.shortcuts import render, redirect
from django.views.generic import View

from .forms import UploadFileForm
from .models import Student


# Create your views here.

# def upload_file(request):
#     if request.method=="Get":
#         form = UploadFileForm()
#     else:
#         form = UploadFileForm(request.POST, request.FILES)
#         file = request.FILES['file']
#
#     return render(request,'fileForm.html',{'form':form})

class UploadFileView(View):
    def get(self, request):
        form = UploadFileForm()
        object_list = Student.objects.all()
        contex = {
            'form': form,
            'object_list': object_list
        }
        return render(request, 'multiFile.html', contex)

    def post(self, request):
        form = UploadFileForm(request.POST, request.FILES)
        title = request.POST['title']
        file = request.FILES.getlist('file')
        student = [Student(title=title, file=file) for file in file]
        Student.objects.bulk_create(student)

        return redirect('/multifile')
