import uuid

from django.http import Http404
from rest_framework import generics, permissions, mixins, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import AccountCodeModel
from .serializer import AccountSerializer


class AccountListApi(APIView):
    def get(self, request):
        codes = AccountCodeModel.objects.all()
        serializer = AccountSerializer(codes, many=True)
        return Response(serializer.data)

    def post(self, request):
        request.data["code"] = uuid.uuid4().hex[:6].upper()
        serializer = AccountSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Account Code API
class AccountDetailApi(APIView):
    serializer_class = AccountSerializer
    permission_classes = (IsAuthenticated,)

    """
        Retrieve, update or delete a account code instance.
        """

    def get_object(self, pk):
        try:
            return AccountCodeModel.objects.get(pk=pk)
        except AccountCodeModel.DoesNotExist:
            raise Http404

    def put(self, request, pk):
        snippet = self.get_object(pk)
        serializer = AccountSerializer(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        code = self.get_object(pk)
        code.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
