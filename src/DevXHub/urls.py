from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('', include('searchProduct.urls')),
    path('inventory/', TemplateView.as_view(template_name="index.html")),
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('inventory.urls')),
    path('multifile/', include('multiFileUp.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
