from django.http import HttpResponse
from django.shortcuts import render

def HomePageView(request):
    return render(request, 'index.html')