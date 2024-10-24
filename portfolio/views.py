from rest_framework import viewsets
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status
import os

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact_message = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)