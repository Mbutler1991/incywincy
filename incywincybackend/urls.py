from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from portfolio.views import ProjectViewSet, ContactMessageViewSet
from django.conf import settings
from django.views.static import serve
import os
from .views import HomePageView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet, basename='contact')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('portfolio.urls')),
    re_path(r'^assets/(?P<path>.*)$', serve, {
        'document_root': os.path.join(settings.BASE_DIR, '', 'incywincywebservices', 'dist', 'assets')
    }),
    re_path(r'^.*$', HomePageView.as_view(), name='home')
]
