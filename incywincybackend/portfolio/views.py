from rest_framework import viewsets
from .models import Project, ContactMessage
from .serializers import ProjectSerializer, ContactMessageSerializer
from django.core.mail import send_mail
from rest_framework.response import Response
from rest_framework import status

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactMessageViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_mail(
                'New Contact Message',
                serializer.data['message'],
                serializer.data['email'],
                ['your-email@example.com'],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)