from rest_framework import viewsets
from .models import Project, Work, Education
from .serializers import ProjectSerializer, WorkSerializer, EducationSerializer
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('order')
    serializer_class = ProjectSerializer

class WorkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Work.objects.all().order_by('order')
    serializer_class = WorkSerializer

class EducationViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Education.objects.all().order_by('order')
    serializer_class = EducationSerializer

@csrf_exempt
def send_contact_email(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        subject = 'New Contact Form Submission'
        body = f"""
        First Name: {data.get('firstName')}
        Last Name: {data.get('lastName')}
        Email: {data.get('email')}
        Phone: {data.get('phone')}
        Message: {data.get('message')}
        """
        email_to = ['busond5@gmail.com']

        msg = EmailMessage(subject, body, to=email_to)
        msg.send()

        return JsonResponse({'success': True, 'message': 'Email sent successfully'})
    else:
        return JsonResponse({'success': False, 'message': 'Invalid request'}, status=400)
