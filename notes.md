# PROJECT NOTES
## Set Up

### Get python and django installed and built

```bash
python
python -m venv env
env\Scripts\activate
pip install django
django-admin startproject LBTS
```
```
DjangoProject/
├── manage.py
├── myproject/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    ├── wsgi.py
```


### Start Django Development Server
```bash
python manage.py runserver
```

### Create Django App
```bash
python manage.py startapp LBTS
```

```
DjangoProject/
├── manage.py
├── myproject/
├── myapp/
    ├── __init__.py
    ├── admin.py
    ├── apps.py
    ├── models.py
    ├── tests.py
    ├── views.py
```

Add the new app ( myapp ) to the INTALLED_APPS list in settings.py.

### After you create the app

name this file `urls.py`

```python[]
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, nanme='home'),
]
```

add a `home` view in `views.py` of `LBTS`

```python
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to My Django App!")
```

### Install Django Extension

Django - Baptiste Darthenay 13.4 million downloads fosho fosho

### To run and test
```bash
python manage.py runserver
```
navigate to `https://127.0.0.1:8000/` to verify.


## Git workflow

1. **STATUS CHECK**

    ```bash
    git status # shows which files have been modified, staged and untracked
    ```

2. **REVIEW CHANGES**

    ```bash
    git diff src/main/java/com/libraryproject/WebDrivers.java # to see what changes made before committing
    git diff --staged # to see changes in files that are staged for commit
    ```

3. **STAGE CHANGES**

    ```bash
    git add src/main/java/com/libraryproject/WebDrivers.java # adds specific file to staging area
    git add WebDrivers.java # adds file from current folder
    git add file1.java file2.java # add multiple files
    git add . #stage all modified and new files
    git restore --staged src/main/java/com/libraryproject/SomeOtherFile.java # ustage file
    ```

4. **STATUS CHECK AFTER STAGING**

    ```bash
    git status # again, untracked red items should turn green
    ```

5. **COMMIT CHANGES**

    ```bash
    git commit -m "Update WebDrivers.java to fix issue with driver init" # commit from staged and comment on changes
    ```

6. **PUSH TO GITHUB**

    ```bash
    git push -u origin master # for first push to specific remote branch, commit/changes to the correct remote branch
    git push # for subsequent pushes
    ```

## Contributing

If you wish to contribute, please fork the repository and create a pull request.
Ensure that your code adheres to the project's coding standards and passes all
tests.

## Contact

For questions or support, please contact me at [katrinagumerov24@gmail.com].
