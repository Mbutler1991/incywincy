from django.utils.deprecation import MiddlewareMixin
from django.conf import settings
from mimetypes import guess_type

class FixMimeTypeMiddleware(MiddlewareMixin):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if request.path.endswith('.js'):
            response['Content-Type'] = 'application/javascript'
        elif request.path.endswith('.css'):
            response['Content-Type'] = 'text/css'
        return response