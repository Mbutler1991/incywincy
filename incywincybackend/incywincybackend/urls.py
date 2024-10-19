from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from portfolio.views import ProjectViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet, basename='contact')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]