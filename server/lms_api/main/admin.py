from django.contrib import admin
from .import models


admin.site.register(models.Student)
admin.site.register(models.Teacher)
admin.site.register(models.Parent)
admin.site.register(models.Adminstaff)
# admin.site.register(models.Classroom)
#admin.site.register(models.Useraccount)
#admin.site.register(models.Usermanager)