from django.db import models


class AccountCodeModel(models.Model):
    code = models.TextField(unique=True)
    name = models.TextField(null=False)

    def __str__(self):
        return self.code + " - " + self.name
