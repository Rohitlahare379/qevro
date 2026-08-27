import os, glob

def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Simple replace for explicit strings
    content = content.replace("'http://localhost:8000/api/strategies'", "`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/strategies`")
    content = content.replace("`http://localhost:8000/api/strategies/${id}`", "`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/strategies/${id}`")
    content = content.replace("'http://localhost:8000/ws/validate/'", "`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/ws/validate/`")
    content = content.replace("'ws://localhost:8000/ws/simulate'", "`${import.meta.env.VITE_WS_BASE_URL || 'ws://localhost:8000'}/ws/simulate`")
    content = content.replace("'http://localhost:8000/api/send-report'", "`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/send-report`")
    content = content.replace("`http://localhost:8000/api/strategies/${activeStrategyId}`", "`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'}/api/strategies/${activeStrategyId}`")

    with open(filepath, 'w') as f:
        f.write(content)

for filepath in glob.glob('src/**/*.tsx', recursive=True):
    replace_in_file(filepath)

print("Done")
