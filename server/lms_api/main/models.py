from django.db import models
from datetime import date

# class Classroom(models.Model):
#     classroom_number = models.CharField(max_length=250)
#     class Meta:
#         db_table="main_classroom"
#         verbose_name_plural = "classroom"
        
class Teacher(models.Model):
    fullName = models.CharField(max_length=100)
    subjectName = models.CharField(max_length=100, default='')
    teacherId = models.CharField(max_length=100, default='null')
    phoneNo = models.CharField(max_length=10, default='null')
    qualification = models.CharField(max_length=100, default='null')
    address = models.CharField(max_length=100, default='null')
    email = models.EmailField(max_length=100, default='null')
    password = models.CharField(max_length=100, default='null')
    profilePicture = models.ImageField(upload_to='teacher_profile_pics/', blank=True, null=True)
    classTaught = models.CharField(max_length=100, default='null')
    class Meta:
        verbose_name_plural = "teacher"

class Student(models.Model):
    fullName = models.CharField(max_length=100)
    std = models.CharField(max_length=100, default='null')
    rollNo = models.CharField(max_length=100, default='null')
    dob = models.DateField(default=date.today)
    phoneNo = models.CharField(max_length=10, default='null')
    parentName = models.CharField(max_length=100, default='null')
    address = models.CharField(max_length=100, default='null')
    email = models.EmailField(max_length=100, default='null')
    password = models.CharField(max_length=100, default='null')
    profilePicture = models.ImageField(upload_to='student_profile_pics/', blank=True, null=True)
    
    class Meta:
        verbose_name_plural = "student"


class Parent(models.Model):
    fullName = models.CharField(max_length=100)
    childName = models.CharField(max_length=100, default='null')
    childRollNo = models.CharField(max_length=100, default='null')
    parentId = models.CharField(max_length=100, default='null')
    phoneNo = models.CharField(max_length=10, default='null')
    address = models.CharField(max_length=100, default='null')    
    email = models.EmailField(max_length=100, default='null')
    password = models.CharField(max_length=100, default='null')
    profilePicture = models.ImageField(upload_to='parent_profile_pics/', blank=True, null=True)
    
    class Meta:
        verbose_name_plural = "parent"


class Adminstaff(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100, default='booran')
    mobile_number = models.CharField(max_length=10)
    
    class Meta:
        verbose_name_plural = "adminstaff"


class TeacherStudentChat(models.Model):
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE)
    student=models.ForeignKey(Student, on_delete=models.CASCADE)
    msg_text=models.TextField()
    msg_from=models.CharField(max_length=100)
    msg_time=models.DateTimeField(auto_now_add=True)
    