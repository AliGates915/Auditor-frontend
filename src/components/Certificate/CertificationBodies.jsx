/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function CertificationBodies() {
  const navigate = useNavigate();

  const [certificationBodies] = useState([
    {
      id: "001",
      name: "B Advancy Ltd.",
      address: "1234 Elm Street, Springfield, USA",
      phone: "+1-234-567-890",
      logo: "data:image/jpeg;base64,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",
      website: "https://badvancy.com",
      email: "contact@badvancy.com",
    },
    {
      id: "002",
      name: "Conceptus Ltd.",
      address: "5678 Maple Ave, Metropolis, USA",
      phone: "+1-345-678-901",
      logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAACRlBMVEX///+JiYmMjIyOjo75+fmcnJzv7+/q6ur19fXt7e2UlJSfn5+QkJDc3NyHh4f7+/vMzMzj4+O6urqkpKTExMS7u7v4//8AtemqqqoAs+wAtuvW1tbg4ODhSEfmSjPkST3bR1UAp8oAr9TeSEvlSEDVRGv/9/zCNIoAob0Aqb8Aorro/P8ApMwAqsoAs9+85vWq5fnmVELrTzHqay/pYTLpo7vtcjDRN3bdRGHvfivw0q/LQmveRVf06vDfSkLaTEi/qsfrvtbnxtvDQ4TJRXvi1uKpQpKWUZnGytrLOofWnLb64/AAlLGyydnH5e1IeKel0t9nvdKL0elExfHt3N3gwMPfpavjgY7jW3DfOELWq67aZ3vSi5LYRlnSbIbSfoz81t7lVVnPLWDoY2nyoKjddZPTg6DseYL9wcb41NnPNFjCbI7QWnvMSGq7LXDbh6Hih7PTJ2rUkLLDIHrshSvPcajuiBvmhDL0p1TzsGfuwIjudRzDVYm4IH/Ver3y4czsom3tgz3BXJ7ttYnofk3wybXviGbjVCLlaUzpQyDIf7PkWwjwqY/CJpS+XZn4wrigYZrElbuURJTyRDSmga+dQoXRpcWUXJ3rrMu7pMbnsKWZQZZ2VpPmjYa1ga6gV5WJfamAbZ/tmn/mgXWBT5huZJruoJrosn2BfanXajDplB798dfpoizrr1B+krlYcKVjYKCMpsZEaqdwXqUmeqZvcputrMdvkrNVn6t+eKiWl7ORtMUeh7JTdJaZ3dx3n7ZnxMh/3etI4SpZAAAdzUlEQVR4nO2d+V9T19aHTwZCCGBAMCFBpiiZSaiKwcJRIGEICRnVSlstpdVb0KKCQ1vpa6+tF1FfrzO0pQ6t9PZt70uwtXKrVOE/e9c+88lE5tD3w/cHAifJPvvZa+211t7nJGDYhja0oQ1taB1ILpfnuwuZlXj/gYNvHWpt37ZtcHBwW3tr66G3Dh7YL8l3t9KUFn/7rXYAGqzZtq2G1DakdlDrO2/v1+a7gykKP/DuYYDaV1OzF4lCq9lL8tXXt7eOjh45+NfDww+8d7i9vn4fAbZ9ex3SG6C6OkSJLFePLNc6Onzk4MhfiW7o3UPtAEZ4IcFVy6qubvv2mpp977//fj2yXGPr8PCRt1357nGC+ui90db2eggbBBbC2cEVgVe3t2bfBx98+Nah9tYTLUeH244N5bvXCWj/kdHWw4fBZDV7STCCZ2pq1y4+HdhuW/3fPhr5cHT0aEuLw3a8K989X0PallEgqyfICEdEJLu4mqLowDHRnENwjcNtADe2vuGGTjQ2IjLkjJTFpgignYzQX7RbooACltt/8OPhEy0tk2Pr1y3xk21A1opMRpCRBkM8uxlRdFMEHRiuBpLcOx+53h1uOzo7bp84hecbIqpaTrQBGMwzIn5QrkiC7aFF4dGWq9sOhms/fPidoZGTp22nXOMT9tl8Y0RKfGy4kfJGgqyWBEMogHSGEsVHwRF2g+x9uLXxpHb/EZtjqMs5cXa9GW7IYUPeSNgMAkgt5Ys02Pnz5yidP8/A0Wxgt9bWxoNYi83Wj1+dcK6vcNJvo9AgguwlIiOED9ITzwDPmU8+/eyzN0GfffbpJ+fPXLhwAeBIpwS2fchurcNH5PjkxCTebf/8v/KNwwqftDkcjDvWIJtNESa7cOHM+S/evBj++otvfvH33TunKLa929phQfAxpIARrF/nHIIfl9aLUw45HGAzMu6DO9YyNtv91ZcRWLQuXv8KBUrkknXb69sPHzrU2Obox7rtzk6sS2fvziVATHVO2G02KJfoGLIDyHYgsi/ejP/Gy/9A0+1Obd0+KJZbP/yozXb6uBY/OzGOdet062DCacedTrvjaMvHlNG2kyFk5+7vYxqM1eXvIcHVwjoHsb03crTNNumSIzZXT0/e2bRngczW0tnIktUC2bWvLif2/stXplHNBVGydfSI66jNMenSnv386jpg097Q6exjs7NtRLZGaCihTV27nvAuiPzHaTK7HW4dPeFqsTntOHbjv8En88yG39A57c6uLput7WOCjIyOOxM0Gal/1oJLgkcebmxsc7WM2Se12A3dLcx1714eY4nLrjt7aaJzCMgoo+2tvTM1dSWBWcbVyD4olAdR2ibYnJOY9tLn98FuD/OWA7SXdOOzE+O4w+Y4QqDVoMg/vSNJMmBDdXJ9K9RbjSdcp8acVzHcDiGy6/bNPO0taG9MjHfqxsWnbLbOkwgNrT5rd9T+M/mmDgxu3wdVMsQixzHtJJnaLmmxW7fvZr7bieiqbtylO4uNOx1DncON73zYvm0voE3/mEpbP9bta68/PNrS1mYb6XKiUHILpht283ZeQsmtnqu4TodDXdyCHRluxN8CtLo7tdPiVBqTo1Vp++i7Q6dtR2GwYMQglHRjeG9vHqZbV88N7NLnXWK704btbxxu0UIlAmipGQ3DDg6i1DasPWmz7cfsqBhx9TyEs+TBJfF7Pfh9KBv6nWP92MnGNukI2sKq2zEtTa096SCs21rBbA5bP4ZP6G5g2P2e++AbT3KeAW72dOM9l7S43enAxMNtJ7GD7TWQsKevpNrg32oOoziCH7PZtMgluzDtwx4cw2fmcnwNpKPnFjYOp5/VQTRznW5rwd5rRwk7VX+EQDJYv621dbSzxTbWjbkmdFeRz4PZOp58ncmOrylJ70MtDpMNO6WDYHbgdNsQ9g5RQE5/k2qT3wwSGwlHcJuzH5PbdZfkYLabUkx6cy6lwJSqbn0LCVXXiboAsezt08P75YdQFEkf7YT2mG0SDZkOQuMtVGp1zHVksOdrCb/9ANIazAStTncKw/pPt+GuVrBaemjtCK3Ndcw5IcfuEwu2rp4OONnc4wx2fS3d6oGU0wOzAdDGMezk6TbJSGv94Id1dTu+S7XN7wZhpQ1oIy32CZhsOt0sCsMwhNjXOQySkt6bGBSvMMchZ/cDWtsJ8Uh7/eDI+1Bmpdro+zXt74xAfdyCozoLGoaRwx6iIrL7yfMMdj6++m53IGcBj4HB7cSwo20nsLcPt28f+e7Ojun9qbW5/87e9rfkHze2HdFOOk9hWmISYw+I2n/uUeb6vobuouqng0SDEcYmAe1dmGv7/zldN/2P1Nr87s6+wY8g9zc68FNOoDqLymOoj5Ev3n2cYh2QtMQ3wR+xThbN1nYEO9JaX49J30jVbPvvvFFTL0VljQ0/7rSj2huiFHafQOuYy9Vkw2dQXUdbDX7aHEddo63tH2DYh9NTO64okm9S8cH27Xs/hEoSoREhclzX40IlJILqyxlaN1EfEGhdBJrDduIIoEHXpG9M75j6Pvkmf6gljIZ9NAxos04njnXqUPvdaFZj3XN9GUaIpe4n6HwEWieBNmZrbPy49RCq9Q5MT+2aup5siz/eqa0bPICRaEOddmc3DBpqH7+NRhGfy1WI5KHpCIdE2/0fEU9+N71j17Uk2a5P19Vtfwv9NjTssDnOkqtsIrnchvUoJvktf2g2R2Pj6BD57A87pnZe+D6JkCb+Ae1E/o3846TDYZu0O2dhFiM0aS9CE//2IrMEMVVOoHUxaOIxAo26QUJ+ZXrXzmtfJbz1s//K9I7aOz9QK5fO0w6H3QklDq6DtQWgoYglzxkaToQRFk1LXqYZop//YWpq5+4LsS9kcLX/+hTaGv+B/rvTZrOfdToBrQehyW8SaPOPMowQS+VhaDig2RqHh5gXXEdoF/6+NtzF6/9zbQpsxi7yOm0OJ6wBTyG0BwzaH48yTxFV+BxC6/6WQZuwO9rahlvYV1y+co24tvaveJdq5Be/3H0N4un0Fc7uXgugoY1bhHaVRsN+epQVkEiFo3U77a4TbY0nOS8Rf/M/F/bsOX/m3CefvflLtDZ+efPL83v27N65a2rXj9xt1OMw0/BLuksYfgmhYXdJtJ+yR8NTYRjaKacdb7FBHcnVxesXLqCLvT///MknnwGfGN3mKcfk8l9+efOzLz89f+4cgO28NvU9vy4bc9gnMYSmvYHmWq7R8Lm7BNp9Em1c57RLAI0z2QhdvL77wp6/n/kZ9G/Q/1L6979//vncuTNngOzarm/CCk7XmNPZj9C02ofEWi3naI8wCq1Lp7vh1Nm70PRvOxj+QsnlL84Axc/hOndmz54LF3b/43LE9mmnzQnljR0WuPKbFBrKCjlDkz4mrHYbofXoQFC84jbwyCjXHqQXv/wE3YJwjsFCAmtevxjtFt3jTqfTBaUx5OsH94i59hjt+SwsZJeI7e5jtFmBM2h2dPCYzTEcYTZCcrHk8pf/+vQTkuv8p//68rJEGn1v0eVwOo+jx56eSw8foqVTjtHEYWin0MEhG9gt3f35Yw5UPmJoS6nnYW8e0LBHHLSeHrTxg7plszUeTa/d2TE78kcM7YkzaMRcyxnaT7/BD7yXj+ZyONpOd6bT7MiYExXGSB33AI0I/o/ghzyUYzRUbiG0HhIN64Ry60Tc98UX7rDb0a4I0n2EhrLno0dYPtGuUofR3UxpzLZ+mx1doSd0/15vby8K/jlHWxSTaPiDnnsQzKjDs4CWhkdOOqmJhlFoKMUQaOLcoS0QaHNf4ze/7eWguWwOW+qBBB8jAz+hB729MzMzHVRhLP71aVr9TUI/LcIiWvv48eOZ3gf3b/b00ElqEmZbyh45y8QQ0MPeB7dmZuZeyHONtrBYhBL33AzyGYjTNE7/mN12LNVGJ512O+2P2m97b3V/PTc39/wRWl9LQzlDe06igcvgRCShdwlxCHG2FG8ZmHXqdGfpP7q/7UXbWY9/m59HaBJvDtHKIWw9miNW2909aH+GVD+6yW4olSaH7E4de2NuR+/MVnjoywNaCNCwR3PEzqf04T06+mPySbvdnkqU7LLbqYKN0IPeGbQlJlmcDyG0cu/LtPucoPpItMfkfvWDh/eYK7K4HYKB41iS2/74KSe4o52NQDdnUJGFyRf/INC2egcy0OuE1PcnMtdPFFrHt9+y88uF2OyOU0ncWyUft+sQGftpqO5eYjsQw+Z/D6HN1b5nuUMLIbQXi78RaDhZN1DCJxGbzZbwJxG6oCQGshucrNExQ10HnV8k0AZyh1b9K6BJ/qDQsLu997jZrB+x2ccmE7q6gh+3OWGaOfu5xx7PPCJ/mw9RaJ6M9DsBVf86AFFy8fd58gJK9+1e3t1G4nEIJpAGjq2ZvvF+O7KY8xRvxf31kydkw/JQyOt9LsFe5hDN+3optPCCRkNlUQfvBS6ICyB7fzw4rWucANNN8lNh95MZ6pYDaSi0sOD905NTNG9oABP/sUhdQMFnZnrv87cEuqDYBa90jMf6IKirc5LA19ln+e/sfjxDXynEQ6E++cAz79JyeaYRYmmr1wuluPynRfoqQzewhU0t+SyacdD3yfFOVxie1jV7nAweOt14mGHxmSfMhcK+kLcPzbTl5cJsYERT+TN0SmwhxOyhdT0h1sQ8Ef5GOubk8f7Orq4hl8s11NXZf5w8roMnxiM+/3r3CXtzz/OQF5lradmdsw+oFy170cNCKEQfEc/MRLlv0dV/A/WfJnTa2V+Ryc52RjqreO4Je8HpqdeLmAaW3Tm7S4tCGwiFGEe5S9YP4dJ2jU86+YKAiGbY8dmoH1junuNct/Z6l9BD+fJ/cnbf4FYSrS8UYrrx9cxcjAuhWlfn1RtkKCTltN+42hXrg9h9c+zdBmKv9zV6lC+7M9b1tVS6vEw8eEPMNeaOubl4gR53dXV13kfq7HKFRxWuuGilXqp2zD2amAiUpHiOlIaez88zQzTgJfOZ3P2fTDSdkAZINGzJ66XnNz7/W0cmmn40/xMTMp4+e0bMZZPbmKOU7fnPMoX20hsqpQ5KH//2KBON/zHPXpRZekaexuN2uw25gPO53cuU83ueeZnJ9mJxMQMRunBxkWmxcPkZuQItdBsM7uVA+q2vIRhCn8lNoikgOtNhuXt+PgP3rbwIhZgo8vLZMhlFJO4A5jEYrOk3H196tw/9IP+A2VBNHYeyaz7tD1Lgi6EFeqwk4Pbk7x73K/hh0KdwW1syemX0w08jfdJnZFJF6ptfTPvGlRecTPlyeZnaEfEhNGzFmGWz+Ylg5XebyD+XyGqS7FfaLvk8FGJGxwNGo4oAvxud00MMahblNiIon9tDd+DZEl26in8HuxWl3nQh2OxPuqSRApmP+t2gR+dU6I1Z9UiP3oAefG76tOA2S3QhWRQKhX5/nuKEkz7/HdbUW+k/Xy8vM3naqCfc3683pdZ0YvLoV4gHwvuR5NAHZlNGAuO++PvzVG4U7gOw0AK94lS8Xna/pkEUxibiMaDPam6zGglzmdwr9BEJsDGhBOtbQJZLuuRCYxJaYN+GbMaYiJ5kWUbz6UlPJP2SlJkO0oT6Fn6FYJCcV8KAeEN9nEbcy27W+XxGMltnG42aZAYDO6VfM6GMkBzWOpwYvraksOIMLXF3PyTuZU409FNIOUJb4dR0/mU3f1emEHnli0TLrr4Fr9f7nLfWLOehGYykBXPkkD6jjz227A4/54A3FFraiiUgydM/gSzMxmXuZbZ5rMlIPmY7jFBoUk7+BLSIfevChT8569SYKiTAnoYbGNWpzB8mel77G7KMRiEZDEx/oCNRtuSfQjT5sy/unobkpRcpssM8NCrfwCRoyiqah0ZbYZ3Qs+yOtuCoRgbxPi+MQScvf4qeXyqL8pzPzfF3OopgTU3ZTdkNTdQv9FgSYxy1upO8JOCWXpZG7CKKyweWiOeiX4HxGfUMmsKop36jMne2ZGpqIqO+WG+gI74pBhpUXi8JAIQ3UFpeJBWLxdKiwtKB18ThZ0sDMSzqM7JV/is95RImoyH6qzMlPe0VfmY6KIyxTyrvQ3TPvBThEvoDCQ49jT1z/EZmM0RhoCtHZi5kSw10mPI0MGcyGoxx3iH1DLx+FqY/Xw7EKzQNRgM9rXxm+jRWvS/W6zOjABOB2RW9wbhmxjF5BgZevnz9+vXLlwMDnjXCgUnPuIHHwMQOX0OWl6K+Brrm9zDFVkDPxpRM6JWZzpqmJpYnYM4ymrWBcYsVpgNuoyGTq8QVPTXVFH7O/Mpy7EdozMkUfqOfPBtM+wxOcZ/B0IBR7fqZIVM0ZTlAwjJew57NoCenNtRCmduTgfxC1t4Kf8MK6wymhiwHSPALDesXCh/lib4GY6b2rsEXKC/0GBs4bu4xZ32PNWDmMrjJDK5oMuszE8AgODVQE9fHi7tWTXMm2o8nn5l7CjM1t5FvGlbS3hn3GIwNZpqIjxbQZH332MPz+QY6bMlXDPoG40paQUyxojc3GJhFrp+H5s92gES+p+HMgCYzc0LIbk1Ggz/1DniaUAOckp+7PmOK12zKb+b0njuW0gCUJWajL7UuKFaMBoORW0vxTuSxrKTUbFIKmDnn5698FatQ/bH1XzIy+fVNej8vyvobOA0FGrIeRVAU5u42hS3qTQG32ZzC5SIUGM0Bvr25aAqNJgfXDhUajqMEIvYrrEaDWb+SpFO+QvEjfEC4DmlVZT1hI3E9MhINM63oDfqkogk4o8Ec6cYcNIVGlZOr2R4zG6z4CZzSK4M5Sk9jygov1/sj7cxp22rJidEwLGhhzhkVDRbEdB24tjx+SBpRV5ls2+IcGQ0FYmYDJhB9dpsM5iZDIotixSsYhSZ/1EZYZ/crV5PvZWryK+luR7camnDmhoboPebK09SA7Bs96DBzLWAJZj9dUzJpaJeMvfT1myHo+eOmAZMfIn60WUYI4j35TLNFk/Uai1WzkjqbNfZSA1KVocnctBLrBlSPBupFfewdYTp/vtKosl4Yc7WqMa+iMVVoLLF9xWcwNzRBLvb7wvsv9cGqDMA1ceZQgFzFWA2qLO9khWvVoiIiiN8Sb0JZ/U0NZogTTXqDwe8jtbJiaGpoaEKHV+Ps2CnIvRCrxpKDCosvT5DwE48mfsYxNSM6s1nTREsDk7CpCeahL+61DquGcPVVVfZvYIqQn1gbKuKbDUnq8flJvgYkPZjMH7CusWxVGMh2A2s2nwUFLMTshiSXSGSWSjzW5gCo2WqSJLAaD2ioC9jKnMYQ6uQkGsT/LBRBHouFusqbFzTqpIqgMlZqSlkQPKz8s+RUzEkhgaexbRBF1oCF2ePJExodlRVBjSaQMTiP32xhK9M8o2EKn8WiWbtiTESKVY2lycqOU3Oe0dDGgUWjWU0fDpxbaeU6QP7RYLhh6lvSTa+vlKqwadusynkxEoEGetWkCqY15VZVlvB6sVmZh2okEg2VJso0alm/JbL0sK4TNLS2SnkXQ2FRWSJt7sndAptVVDSomjWpLYlNlqhraZM6Rxs+XMXIOCZ/tMFfU1Zl9Bhkys0GJF8xk+mqMumdXoVPFSO6mvKxqAnEXNcHkmXzBNWxrp5Z84MWM+MElEn5JIo9sV4fewCzqHjJNJDEJpQioIqzRxBU5nA3i5ZJHYz9ZEAZNX5GkSeoiuO+HnXutiBZKYLqOAPabFEFE4BTrFriVjBxvD6bCsQtFDwapUrdHN+b5M1qKK3imEVhyYc/oiSrjOcsCmvQolKvvoq5IWcKBC3K+EVnXipIpMAagVkBnVcrLcFVa+RFOA9wqVRrrPEUGnUe9rOQ2K3/2PIElCqVGoqo4OpqsxXU3BxYDQaVapVS82qtCOFX58lo4C/qRPKXyRdQAx0QKoFIpURSBxO4UQGKrzyER0p+daILNKnH4wN7oY1InyexD7k1q3J1wTCaFME0F5+xWzZBSZOHQoTTgyDk5ix4jQcWteq8kmGopoLcnGHLmVCjmdv+S1koBlriX/5MUlaL2tKc43/fFUOegEW9Ru5NQlAuK9eBxWiZmoNQvmdkzpmC8RYC+ZCpOX6dm3A7WYu5acjkh3I43UasFlUgf2k6phQBZbqFkVWlWl2HZBjaNFTFWZ6uLasyfbtnS6agMg22ZlU+rl0kKlR5pfpeKKLXMRkoqA6mlm1X81oNJyR/SnYzqVW5vBMrRQVTWPV7YDG+/skgliRdTlgt+bggk4KsyiQjXbM6fzsFSapZqUyipkD18LpNZxFq1qgTTr7WoCr7nwTKoEyJrlBNAdU6rIfjyxpUqywBa3y/9AQ0ygwthnIpBaxQwSKBZlP0FC5Hu6xKyzpadSYjE8wjJdpeDTR7Cjl3Cko91kAwqFKpNda/JhiSAu2AK9VqtUodZKVUqpUqpSZg+su5YpgUCo9vNQh4aO+YgNQE/QGP4q/OxZVcDEY0KdbHXtWGNrShDW1oQxva0IYypcLy6vJo9wdItlaXR3w9m4R/I49YEnljT2H4+8QSiUQqISSVsNUkHJJK+e8XEy+kXitnX8h5kSSsS0XlhbHuLSorEAkFQlFBWVgFW12MjguLq/mHCzfz3y0o5j8v3oLaE/HeVyoQiUQlSCKRoJQ5XCBCKimuZFd1ZQLyGHo1+8rNm9iTSkSbuB8Xq4azCUUVZVE+QlZeAFglJTI4ZwX3eFEFnKREViISCAp4/3mkSMBjC0crLYEzofcJOd0pFRBYxA8h+wnZAhJWKJAxhqgUkC8r4aNxzlko5KJtFgpLqgpKhJtEEWylQmFBJbKntKyEa55ymVBWiU4oKZOJSko5z0hKBFu4aEIeWpkIzE/8q7FKETsipYIC9K18hDjOUyCoRgdKi0UF9FE5eslWYEWPLAAPTcAxskhG9Fqyhe9L6HUyEWMTKYe7sERYwXyFdJWwhGO3opISYSWHhWe1UpGoinkf57CgIPzMJBr59aZSmaCSe7xQIOPbYLOQ9SgumrxAQH/TZMR6sEJYEC1+yCuEFWzj8iphMfvOIuRUbE94aHKZsCra5ybXQINGeJMhChr7fq5DSoSCWLdHbRWKSqMdh8nMDUPSEiH7NZyAVlXCDBYfDd4X9T8CrYVWKCjgsiSDFus/EFUJq2Ic38L7u1JQwZitSCQSl7FxjodWIYre3lpoEoGMG78TRgMv4XeUlYxjDY7A9/kf9JduEjEHikRCObDKqANcNLBu9O8GXgst7PmE0SCMCKui/nsliSB6V6oFwrAZw05XwmoYtoUO4ly0cqEwevKErhfS4sx3Bq2YP/iJo2GVkDqqokAUCoRRv4ahOmKQq4RMcCXRsC2CEuK9XLRqoTBacyjFlAgobeIFf6JT4s1CGW/ok0DDqiuEQmFFRMSIhRZRYWBVbC6j0OCQrDAcTRAbDWoGUlw0UUUVqEAo4lc8UdDYOczLayB5aZVMKAxPa7EdsiTcIdlwT6MBG0oc3JS9NZ5DFpH+yDUPVBGEJWVhgx6JFitlUxxVIkFYOJGXCMMKRKr3srCYKuWMAYMmrxIUS8LDSPTvGYkVRoSby0Cl4V1dA21TZOqsLBGEDWpVhCHJTleEDQL0n2mOQcPEFYBVuInjvMUxYvFaETJMEWiVa6FBTA+L9eB5UVNepVDE+7L+Ek6XWTTEVrGFW0NCcRvVI9NFKxOUML9DgRmtKVFl2JFiYVW0zXh5gZBb+VSJCjiFFouGykuRiIMmlomiukG6aIUidkJsFkQrCwoiMnQhFH3MOHMGvBzKXObftcDCgdMFLhomrYDlFqe9aoGokh4FOTsc6aJhxLQmz8AtC6R0HwtLNkUUk6UyYUGZRIzJpaVV3AHfKoJFTZFULpaUwYKOG2x4aJikQsRf1ECSqZbK5WJpNWctihY1jNh3J44mgW5Wo95UcucGtoVceMkLi6NVjFsLhIKSguICmYBfx20tFghLZAUFkGv56+yiEt6qr0jGz4FlMsEmGdHeJvZskNdkjNhJkTgamEAggt7IBMLNnBm0BTpdXFVVLGOMypO4rGITSi4FW4rCjhcQ1QO5suSwbOJHqPIwX5NUFpDtcd5XuokpRgSbWDTZpqjrDoi6kflRslmE3l9RzYsNhZtlqGnR5li7I5Ly8vKiKOEEHY8YDXn4tkvkK4rC3yeXcMT2QhLjS3EiTkFIWlgeZXNKDkdjbvtsaEMb2tCGNrShDW1oQxv6f6r/AyD/kIuqfkY1AAAAAElFTkSuQmCC",
      website: "https://conceptus.com",
      email: "info@conceptus.com",
    },
    // Add more entries here...
  ]);

  return (
    <>
      <nav className="flex justify-between my-4 mx-8">
        <div className="text-2xl font-extrabold text-[#0096FF] tracking-wide">
          Certification Bodies
        </div>
        <Link to="/new-certification-body">
          <button
            className="bg-[#0096FF] font-extrabold px-3 py-1 rounded-full transition-all duration-300 
                text-xl text-white tracking-wide flex items-center justify-center
                 hover:bg-[#4a32b3] 
               hover:scale-105 hover:shadow-lg hover:shadow-[#0096FF]/80"
          >
            +
          </button>
        </Link>
      </nav>
      <hr className="bg-gray-400 mb-4" />

      {/* Cards */}
      <div className="w-fit ml-8 mx-auto grid grid-cols-3 justify-items-center justify-center 
      gap-y-20 gap-x-8  mb-5">
        {Array.isArray(certificationBodies) && certificationBodies.length > 0 ? (
          certificationBodies.map((body) => (
            <div
              key={body.id}
              className="w-[320px] bg-white shadow-xl shadow-gray-400 rounded-xl 
              duration-500 hover:scale-105 hover:shadow-xl relative cursor-pointer"
              onClick={() => 
                navigate('/companyCard', { state: { companyname: body.name } })
              }
            >
              {/* Logo */}
              <img
                src={body.logo}
                alt={`${body.name} Logo`}
                className="h-40 w-40 rounded-t-xl object-cover mx-auto mt-4"
              />

              {/* Info */}
              <div className="px-4 text-center text-sky-700 font-sans py-3">
                <h3 className="text-lg  font-bold">{body.name}</h3>
                <p className="text-sm text-gray-500 truncate">{body.address}</p>
                <p className="text-sm text-gray-500">{body.phone}</p>
                <a
                  href={body.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  Visit Website
                </a>
                <p className="text-sm text-gray-500">{body.email}</p>

                {/* Actions */}
                <div className="flex justify-center gap-4 mt-4">
                  <button className="text-gray-900 hover:text-green">
                    <FaEdit size={24} />
                  </button>
                  <button className="text-gray-900 hover:text-red">
                    <AiFillDelete size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No certification bodies available</p>
        )}
      </div>
    </>
  );
}

export default CertificationBodies;
