from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from portfolio.views import ProjectViewSet, ContactMessageViewSet
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet, basename='contact')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    path('', TemplateView.as_view(template_name='dist/index.html')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)