<div class="mermaid">
flowchart TD

    D[Start]

    subgraph SYSTEM["System"]
        A[Service A]
        B[Service B]
        C[Service C]

        A --> B
        B --> C
        C --> B
    end

    D --> A

</div>