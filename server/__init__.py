"""Server package initializer.

This file makes the `server` folder a Python package so imports like
`from server import util` or `import util` when running inside the package
work predictably under WSGI servers such as gunicorn.
"""

__all__ = ["server", "util"]
