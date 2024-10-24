from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from portfolio.views import ProjectViewSet, ContactMessageViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet, basename='contact')
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    re_path(r'^.*$', TemplateView.as_view(template_name='incywincywebservices/index.html'), name='home'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)