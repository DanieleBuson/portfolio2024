from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    order = models.IntegerField(default=0)
    link = models.CharField(max_length=1000, blank=True, null=True)

class Work(models.Model):
    title = models.CharField(max_length=200)
    employer = models.CharField(max_length=200)
    place = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='work/')
    order = models.IntegerField(default=0)

class Education(models.Model):
    school = models.CharField(max_length=200)
    place = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    image = models.ImageField(upload_to='education/')
    order = models.IntegerField(default=0)
