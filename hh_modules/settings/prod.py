from .base import *

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'f=sxf551h(qt*-e7@b&2x@r$6d2&bf#qt#nza7f@e10a)5j^3v'

import dj_database_url
DATABASES['default'] =  dj_database_url.config()