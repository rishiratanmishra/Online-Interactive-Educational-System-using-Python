class ImagePathMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        if response.has_header('image_path'):
            image_path = response['image_path']
            # Modify image URLs to add the domain
            response.content = response.content.replace(b'/media/', image_path.encode('utf-8'))
        return response
