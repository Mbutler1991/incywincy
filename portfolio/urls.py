from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ContactMessageViewSet

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'contact', ContactMessageViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]