from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, WorkViewSet, EducationViewSet, send_contact_email

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='projects')
router.register(r'works', WorkViewSet, basename='works')
router.register(r'education', EducationViewSet, basename='education')

urlpatterns = [
    path('', include(router.urls)), 
    path("send-email/", send_contact_email, name="send-email")
]
