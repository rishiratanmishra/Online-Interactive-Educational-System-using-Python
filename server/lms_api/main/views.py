from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework import generics
#from rest_framework import permissions
#from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from .serializers import TeacherSerializer, ParentSerializer, StudentSerializer, AdminstaffSerializer
from . import models
from urllib.parse import urlparse


 #UseraccountSerializer, UsermanagerSerializer, 
# class ClassroomList(generics.ListCreateAPIView):
#     queryset = models.Classroom.objects.all()
#     serializer_class = ClassroomSerializer
    #authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]



# class ClassroomDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.Classroom.objects.all()
#     serializer_class = ClassroomSerializer
#    # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]

 #UseraccountSerializer, UsermanagerSerializer, 
class TeacherList(generics.ListCreateAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
    #authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]



class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Teacher.objects.all()
    serializer_class = TeacherSerializer
   # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt    
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    teacherloginData=models.Teacher.objects.get(email=email,password=password)
    if teacherloginData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    






class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
   # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]
    

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = StudentSerializer
   # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]



@csrf_exempt    
def student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    studentloginData=models.Student.objects.get(email=email,password=password)
    if studentloginData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
    



    



class ParentList(generics.ListCreateAPIView):
    queryset = models.Parent.objects.all()
    serializer_class = ParentSerializer
   # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]
    

class ParentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Parent.objects.all()
    serializer_class = ParentSerializer
   # authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]
    
@csrf_exempt    
def parent_login(request):
    email=request.POST['email']
    password=request.POST['password']
    parentloginData=models.Parent.objects.get(email=email,password=password)
    if parentloginData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})


class AdminstaffList(generics.ListCreateAPIView):
    queryset = models.Adminstaff.objects.all()
    serializer_class = AdminstaffSerializer
   # authentication_classes = [TokenAuthentication]
   # permission_classes = [permissions.IsAuthenticated]
    

class AdminstaffDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Adminstaff.objects.all()
    serializer_class = AdminstaffSerializer
    #authentication_classes = [TokenAuthentication]
    #permission_classes = [permissions.IsAuthenticated]

@csrf_exempt    
def adminstaff_login(request):
    email=request.POST['email']
    password=request.POST['password']
    adminstaffloginData=models.Adminstaff.objects.get(email=email,password=password)
    if adminstaffloginData:
        return JsonResponse({'bool':True})
    else:
        return JsonResponse({'bool':False})
        

def get_student_chat_history(request, student_id):
    # Retrieve chat messages for the given student ID
    chat_messages = TeacherStudentChat.objects.filter(student_id=student_id)

    # Prepare the response data
    response_data = []
    for message in chat_messages:
        response_data.append({
            'message': message.msg_text,
            'student_id': message.student_id,
            'msg_from': message.msg_from,
            'msg_time': message.msg_time,
        })

    return JsonResponse(response_data, safe=False)



def get_student_profile(request, student_id):
    student = get_object_or_404(models.Student, id=student_id)

    # Extract relative path from profilePicture URL
    parsed_url = urlparse(student.profilePicture)
    relative_path = parsed_url.path.replace("/media/", "")

    # Construct the modified URL for the frontend
    modified_profile_picture_url = request.build_absolute_uri(f'/media/{relative_path}')

    student_data = {
        "id": student.id,
        "fullName": student.fullName,
        "std": student.std,
        "rollNo": student.rollNo,
        "dob": student.dob,
        "phoneNo": student.phoneNo,
        "parentName": student.parentName,
        "address": student.address,
        "email": student.email,
        "password":student.password,
        "profilePicture": modified_profile_picture_url,
    }

    return JsonResponse(student_data)


def get_parent_profile(request, parent_id):
    parent = get_object_or_404(models.Parent, id=parent_id)

    parsed_url = urlparse(parent.profilePicture)
    relative_path = parsed_url.path.replace("/media/", "")
    modified_profile_picture_url = request.build_absolute_uri(f'/media/{relative_path}')

    parent_data = {
        "id": parent.id,
        "fullName": parent.fullName,
        "childName": parent.childName,
        "childRollNo": parent.childRollNo,
        "parentId": parent.parentId,
        "phoneNo": parent.phoneNo,
        "address": parent.address,
        "email": parent.email,
        "password": parent.password,
        "profilePicture": modified_profile_picture_url,
    }

    return JsonResponse(parent_data)


def get_teacher_profile(request, teacher_id):
    teacher = get_object_or_404(models.Teacher, id=teacher_id)

    parsed_url = urlparse(teacher.profilePicture.url)
    relative_path = parsed_url.path.replace("/media/", "")
    modified_profile_picture_url = request.build_absolute_uri(f'/media/{relative_path}')

    teacher_data = {
        "id": teacher.id,
        "fullName": teacher.fullName,
        "subjectName": teacher.subjectName,
        "teacherId": teacher.teacherId,
        "phoneNo": teacher.phoneNo,
        "qualification": teacher.qualification,
        "address": teacher.address,
        "email": teacher.email,
        "password": teacher.password,
        "profilePicture": modified_profile_picture_url,
        "classesTaught": [class_obj.class_number for class_obj in teacher.classesTaught.all()],
    }

    return JsonResponse(teacher_data)
